import { createContext, useContext, useEffect, useState } from 'react'
import { supabase, getCurrentUser } from '../lib/supabase'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    // Get initial session
    getCurrentUser().then((user) => {
      setUser(user)
      checkAdminStatus(user)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user || null
        setUser(currentUser)
        checkAdminStatus(currentUser)
        setLoading(false)
      }
    )

    return () => subscription?.unsubscribe()
  }, [])

  const checkAdminStatus = async (user) => {
    if (!user) {
      setIsAdmin(false)
      return
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

      if (!error && data?.role === 'admin') {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    } catch (error) {
      console.error('Error checking admin status:', error)
      setIsAdmin(false)
    }
  }

  const value = {
    user,
    loading,
    isAdmin,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
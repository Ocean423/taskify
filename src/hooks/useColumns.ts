import { useEffect, useState } from 'react'

import api from '@/lib/axiosInstance'
import type { Column } from '@/types/types'

export const useColumns = (dashboardId: number) => {
  const [columns, setColumns] = useState<Column[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchColumns = async () => {
      try {
        const res = await api.get(`columns?dashboardId=${dashboardId}`)
        const { data } = res.data
        setColumns(() => data)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    if (dashboardId) {
      fetchColumns()
    }
  }, [dashboardId])

  return { columns, loading, error }
}

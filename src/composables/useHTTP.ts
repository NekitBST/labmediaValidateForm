import {ref} from 'vue';
import {HttpOptions} from '@/types/http';

export function useHTTP<T = any>(url: string, options?: HttpOptions) {
    const data = ref<T | null>(null)
    const status = ref<number | null>(null)
    const isLoading = ref(false)
    const isSuccess = ref(false)
    const isError = ref(false)

    const execute = async () => {
        isLoading.value = true
        isSuccess.value = false
        isError.value = false
        data.value = null
        status.value = null

        try {
            const response = await fetch(url, {
                method: options?.method || 'GET',
                headers: options?.headers,
                body: options?.body ? JSON.stringify(options.body) : undefined
            })

            status.value = response.status

            if (response.ok) {
                data.value = await response.json()
                isSuccess.value = true
            } else {
                isError.value = true
            }
        } catch (err) {
            isError.value = true
        } finally {
        isLoading.value = false
        }
    }
    
    return {
        data,
        status,
        isLoading,
        isSuccess,
        isError,
        execute
    }
}
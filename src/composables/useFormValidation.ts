
import { reactive, computed } from 'vue'
import type { FormConfig, FormFields, FieldState, ValidationRule } from '@/types/validation'

export function useFormValidation(config: FormConfig) {
    
    const fieldsData: Record<string, FieldState> = {}
    
    for (const fieldName of Object.keys(config)) {
        fieldsData[fieldName] = {
            value: '',
            errors: [],
            isValid: false,
            touched: false 
        }
    }
    
    const fields = reactive(fieldsData) as FormFields

    return {
        fields
    }
}
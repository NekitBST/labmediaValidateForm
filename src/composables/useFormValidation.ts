
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

    const validateField = (fieldName: string) => {
        const value = fields[fieldName].value
        const rules = config[fieldName]
        const errors: string[] = []
        
        for (const rule of rules) {
            const result = rule(value)
            
            if (result !== true) {
                errors.push(result as string)
            }
        }
        
        fields[fieldName].errors = errors
        fields[fieldName].isValid = errors.length === 0
        fields[fieldName].touched = true
        
    }
    return {
        fields,
        validateField
    }
}
<template>
  <v-card class="mx-auto" max-width="600" min-width="400">
      <v-card-title class="justify-content-center m-5 primary--text" primary-title>
      مرحله اول
    </v-card-title>
    <v-card-text>
      <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="نام و نام خانوادگی"
          rules="required|min:3|max:50"
        >
          <v-text-field
            v-model="fullName"
            :counter="50"
            :error-messages="errors"
            label="نام و نام خانوادگی"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          :rules="{
            required: true,
            digits: 11,
            regex: '^',
          }"
          name="شماره موبایل"
        >
          <v-text-field
            v-model="phoneNumber"
            :counter="11"
            max="11"

            :error-messages="errors"
            label="شماره موبایل"
            required
          ></v-text-field>
        </validation-provider>


        <validation-provider
          v-slot="{ errors }"
          name="ثبت نام به عنوان"
          rules="required"
        >
          <v-select
            v-model="selectedRole"
            :items="rules"
            :error-messages="errors"
            label="ثبت نام به عنوان"
            data-vv-name="ثبت نام به عنوان"
            required
          ></v-select>
        </validation-provider>

        <v-row>

          <v-col class="mx-auto text-center mt-3">
            <v-btn  id="signup" class="mx-auto bg-blue "  color="primary" type="submit"  :disabled="invalid"> بعدی  </v-btn>
          </v-col>
        </v-row>
        
      </form>
    </validation-observer>
    </v-card-text>

    <v-card-actions>
      
    </v-card-actions>
  </v-card>
</template>

<script>

import {
  required,
  digits,
  email,
  min,
  max,
  regex,
} from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate'


setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} باید {length} عدد باشد. ({_value_})',
})

extend('required', {
  ...required,
  message: '{_field_} نباید خالی باشد',
})

extend('max', {
  ...max,
  message: '{_field_} نباید بیشتر از  {length} حرف باشد',
})
extend('min', {
  ...min,
  message: '{_field_} نباید کمتر از {length} کارکتر باشد',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} مطابقت ندارد با {regex}',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    fullName:'',
    phoneNumber:'',
    rules:['مصرف کننده','فروشگاه','شرکت'],
    selectedRole:''
  }),

  methods: {
    submit() {
      this.$refs.observer.validate()
      const levlOneData ={fullName:this.fullName,phoneNumber:this.phoneNumber,selectedRole:this.selectedRole};
      this.$emit('levelOneNext',levlOneData)
    }
    
  },
  
}
</script>

<style lang="scss" scoped>
#signup.v-btn--disabled{
  background-color:rgb(214, 141, 156) !important;
  color:white !important;
}

.justify-content-center{
  justify-content: center;
}</style>

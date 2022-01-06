<template>
  <v-card class="mx-auto mt-5" max-width="600" min-width="400">
    
    <v-card-title class="justify-content-center primary--text" primary-title>
      ورود
    </v-card-title>
    <v-card-text>
      <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="نام کاربری"
          rules="required|min:3|max:50"
        >
          <v-text-field
            v-model="username"
            :counter="50"
            :error-messages="errors"
            label="نام کاربری"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          :rules="{
            required: true,
            regex: '^',
            min:8
          }"
          name="رمز عبور"
        >
          <v-text-field
            v-model="password"
            :counter="11"
            max="65"

            :error-messages="errors"
            label="رمز عبور"
            required
          ></v-text-field>
        </validation-provider>

        <v-row>

          <v-col class="mx-auto text-center mt-3" cols="8">
            <v-btn  id="signup" class="mx-auto bg-blue " large large color="primary" type="submit"  :disabled="invalid"> ورود  </v-btn>
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
    username:'',
    password:''
  }),

  methods: {
    submit() {
      this.$refs.observer.validate()
      alert('username: '+this.username + ' -- password: '+this.password)
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
}
</style>

<template>
  <div class="buttons" 
    :class="{ stepOneNext: currentStep === 1}"
  >
    <router-link class="previous"
      :to="{name: 'current-step', params: { id: currentStep - 1}}"
      v-show="currentStep !== 1"
    >
      <div class="previous-arrow">        
      </div>
      上一步
    </router-link>
    <router-link class="next"
      :to="{name: 'current-step', params: {id: currentStep + 1}}"
      v-show="currentStep < 3 "
    >
      下一步
      <div class="next-arrow">
      </div>
    </router-link>
    <button class="submit" type="submit"
      v-show="currentStep === 3"
    >
      確認下單
    </button>
  </div>
</template>

<script>
export default {
  name: 'Buttons',
  props: {
    initialCurrentStep: {
      type: Number,
      required: true
    },
  },
  data () {
    return {
      currentStep: this.initialCurrentStep,
    }
  },
  methods: {
    watchStepChange () {
      this.currentStep = this.initialCurrentStep      
    }
  },
  watch: {
    initialCurrentStep: {
      handler: 'watchStepChange'
    }
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  @include size(100%, 110px);
  margin-top: 32px;
  padding: 24px 0;
  border-top: 1px solid $buttons-border;
  @include flex($justify-content: space-between);
  button, a {
    @include size(156px, 46px);
    background-color: $next-bg;
    border: none;
    border-radius: 8px;
    color: $next-color;
    @include flex(row, space-evenly, center);
    cursor: pointer;
    .previous-arrow {
      @include background-image($previous-arrow, 20.5px, 9px, contain);
    }
    .next-arrow {
      @include background-image($next-arrow, 20.5px, 9px, contain);
    }
  }
  // set previous button style
  .previous {
    background-color: transparent;
    color: $previous-color;
  }
}


// set step one buttons alignment
.stepOneNext {
  justify-content: flex-end;
}

@media screen and (min-width: 375px) {
  .buttons{ 
    height: 20px;
  }
}
</style>
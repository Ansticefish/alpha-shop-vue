<template>
  <div class="stepper">
    <div v-for="step in stepInfo" 
    :key="step.step" 
    :class="[step.divName, 
    {'active': currentStep === step.step}, 
    {'done': currentStep >= step.step + 1}]"
    >
      <div :class="[step.className]">
      </div>
      <p>
        {{step.text}}
      </p>
    </div>
  </div>
</template>

<script>
const stepData = [
  {
    step: 1,
    divName: 'step-one',
    className: 'one',
    text: '寄送地址',
  },
  {
    step: 2,
    divName: 'step-two',
    className: 'two',
    text: '運送方式',
  },
  {
    step: 3,
    divName: 'step-three',
    className: 'three',
    text: '付款資訊',
  }
]

export default {
  name: 'Stepper',
  props: {
    currentStep: {
      type: Number,
      required: true
    },
  },
  data () {
    return {
      stepInfo: stepData
    }
  },
}
</script>

<style lang="scss" scoped>
.stepper {
  @include flex($justify-content: space-between);
  div {
    position: relative;
    div {
      // set circle style
      @include size(32px, 32px);
      border-radius: 50%;
      @include stepper-circle(transparent, $step-undone);
      // set content style
      @include flex(row, center, center);
      color: $step-undone;
    } 
    p {
    @include hide(display);
    }
  }    
}

// set content in the circle 
$content: ("one": 1, "two": 2, "three": 3);
@each $item,
$value in $content {
  .#{$item}::before {
    content: "#{$value}";
    color: $step-undone;
    // position reference point: .one, .two, .three (div > div)
    @include position-absolute(top, left, 50%, 50%);
    transform: translate(-50%, -50%);
  }
}

// set lines between circles
.one::after,
.two::after {
  content: "";
  @include size(60px, 1px);
  // position reference point: .step-one, .step-two
  @function left-spacing() {
    $new-space: calc((100vw - 15*2px - 32*3px - 60*2px)/4 + 32px);
    @return $new-space
  };
  @include position-absolute(top, left, 16px, left-spacing());
  background-color: $progress-undone;
}

// control stepper state
.stepper {
  div.active {
    & .one, & .two, & .three {
      @include stepper-circle(transparent, $step-active);
      &::before {
        color: $step-active;
      }
      &::after {
        background-color: $progress-active;
      }
    }
    & .one {
      @include stepper-circle($circle-one-active, $circle-one-active);
      &::before {
        color: $number-one-active;
      }
    }
    & div ~ p {
      color: $step-active;
    }
  }

  div.done {
    & .one, & .two, & .three  {
      @include stepper-circle($circle-done, $circle-done);
      color: $step-done;
      &::before {
        content: "\2713";
        color: $number-done;
      }
      &::after {
        background-color: $progress-done;
      }
    }
    & div ~ p {
      color: $step-active;
    }
  }
}

@media screen and (min-width: 375px) {
  .stepper {
    div {
      @include flex($align-items: center);
      p {
        display: block;
        margin-left: 10px;
        color: $step-undone; 
      }
      .one::after, .two::after {
        @function left-spacing() {
      $new-space: calc((45vw - 15*2px - 32*3px - 60*2px - 64*3px - 10*3px )/4 + 42px + 64px);
      @return $new-space 
      };
        @include position-absolute(top, left, 16px, left-spacing());
      }
    }
  }
}
</style>
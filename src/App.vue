<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1 v-myon:jumbotron="function jumbotron(){}">Directives Exercise</h1>
      <button class="btn btn-primary" v-customOn:click="clicked">click me </button>
      <hr>
      <div style="width:150px;height:150px;background-color:lightgreen"
        v-customOn:mouseenter="mouseEnter" v-customOn:mouseleave="mouseLeave"
      ></div>
      <!-- Exercise -->
      <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

    </div>
  </div>
</div>
</template>

<script>
export default {

  directives: {
    'customOn': {
      bind(el, binding) {
        //  el.onclick = function (){
        //    binding.value();
        //  }
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type,fn);

      }

    }
  },
  methods:{
    clicked(){
      alert("hi there thanks for clicking ");
    },
    mouseEnter(){
      console.log("mouse enter");
    },
    mouseLeave(){
      console.log("mouse leave");
    }
  }

}
</script>

<style>

</style>

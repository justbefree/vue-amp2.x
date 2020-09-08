<template>
  <div class="examples-container">
    <yn-flex justifyContent="spaceAround">
      <yn-flex-item flex="2">
        <div class="code-container">
          <h3>快速上手</h3>
          <pre><code class="lang-markup">{{ markupcode }}</code></pre>
          <pre><code class="lang-js">{{ jscode }}</code></pre>
        </div>
      </yn-flex-item>
      <yn-flex-item flex="1">
        <div class="map-container">
          <VueAmap2x class="amap" width="320px" height="568px" mapKey="ccd1e3a84dd69c646c53abd884db7141"></VueAmap2x>
        </div>
      </yn-flex-item>
    </yn-flex>
  </div>
</template>
<script type="text/javascript">
  import { jscode, markupcode } from "./code";
  export default {
    name: "quickStart",
    data() {
      return {
        jscode,
        markupcode
      };
    }
  }
</script>
<style type="text/css">
  .examples-container{
    position: absolute;
    top: 50%;
    width: 100%;
    height: 568px;
    margin-top: -284px;
  }
  .map-container{
    width: 320px;
    height: 568px;
    border: 2px solid #efefef;
    overflow: hidden;
    border-radius: 8px;
    margin:  0 auto;
  }
  .code-container {
    width: 94%;
    margin: 0 auto;
  }
</style>
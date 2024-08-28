import{_ as s,c as n,o as a,a5 as p}from"./chunks/framework.D7Lp9tQe.js";const l="/iDeal-Press/assets/%E6%8A%98%E7%BA%BF%E5%9B%BE%E7%A4%BA%E6%84%8F%E5%9B%BE.DS6ylRSk.png",q=JSON.parse('{"title":"简易折线图","description":"","frontmatter":{},"headers":[],"relativePath":"views/Vue/Vue3Plugins/Echarts/lineChart.md","filePath":"views/Vue/Vue3Plugins/Echarts/lineChart.md","lastUpdated":1724859949000}'),e={name:"views/Vue/Vue3Plugins/Echarts/lineChart.md"},i=p('<h1 id="简易折线图" tabindex="-1">简易折线图 <a class="header-anchor" href="#简易折线图" aria-label="Permalink to &quot;简易折线图&quot;">​</a></h1><p><a href="https://echarts.apache.org/examples/zh/index.html" target="_blank" rel="noreferrer">echarts官网</a></p><p><img src="'+l+`" alt="效果图"></p><ol><li>安装<code>echarts</code></li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pnpm install echarts;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>页面中使用</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;myEcharts&quot; class=&quot;myEcharts&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>  onMounted,</span></span>
<span class="line"><span>  onUnmounted</span></span>
<span class="line"><span>} from &#39;vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import * as echarts from &quot;echarts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let echart = echarts;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 基础配置一下Echarts</span></span>
<span class="line"><span>function initChart() {</span></span>
<span class="line"><span>  let chart = echart.init(document.getElementById(&quot;myEcharts&quot;), &quot;dark&quot;);</span></span>
<span class="line"><span>  // 把配置和数据放这里</span></span>
<span class="line"><span>  chart.setOption({</span></span>
<span class="line"><span>    xAxis: {</span></span>
<span class="line"><span>      type: &quot;category&quot;,</span></span>
<span class="line"><span>      data: [</span></span>
<span class="line"><span>        &quot;一月&quot;,</span></span>
<span class="line"><span>        &quot;二月&quot;,</span></span>
<span class="line"><span>        &quot;三月&quot;,</span></span>
<span class="line"><span>        &quot;四月&quot;,</span></span>
<span class="line"><span>        &quot;五月&quot;,</span></span>
<span class="line"><span>        &quot;六月&quot;,</span></span>
<span class="line"><span>        &quot;七月&quot;,</span></span>
<span class="line"><span>        &quot;八月&quot;,</span></span>
<span class="line"><span>        &quot;九月&quot;,</span></span>
<span class="line"><span>        &quot;十月&quot;,</span></span>
<span class="line"><span>        &quot;十一月&quot;,</span></span>
<span class="line"><span>        &quot;十二月&quot;</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    tooltip: {</span></span>
<span class="line"><span>      trigger: &quot;axis&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    yAxis: {</span></span>
<span class="line"><span>      type: &quot;value&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    series: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        data: [</span></span>
<span class="line"><span>          820,</span></span>
<span class="line"><span>          932,</span></span>
<span class="line"><span>          901,</span></span>
<span class="line"><span>          934,</span></span>
<span class="line"><span>          1290,</span></span>
<span class="line"><span>          1330,</span></span>
<span class="line"><span>          1320,</span></span>
<span class="line"><span>          801,</span></span>
<span class="line"><span>          102,</span></span>
<span class="line"><span>          230,</span></span>
<span class="line"><span>          4321,</span></span>
<span class="line"><span>          4129</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        type: &quot;line&quot;,</span></span>
<span class="line"><span>        smooth: true, // 线条平滑</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  window.onresize = function () {</span></span>
<span class="line"><span>    //自适应大小</span></span>
<span class="line"><span>    chart.resize();</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  initChart();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>.myEcharts {</span></span>
<span class="line"><span>  width: 500px;</span></span>
<span class="line"><span>  height: 500px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div>`,7),r=[i];function c(t,b,u,m,o,d){return a(),n("div",null,r)}const g=s(e,[["render",c]]);export{q as __pageData,g as default};

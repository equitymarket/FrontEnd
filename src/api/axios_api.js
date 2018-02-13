/**
 * Created by ouzs on 2017/11/24.
 */
import Vue from 'vue'
export default function getData (url) {
  return Vue.axios.get(url)
}

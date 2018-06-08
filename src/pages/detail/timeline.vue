<template>
  <div class="timeline">
    <div class="title">
      时间线
    </div>
    <div class="timeline-detail">
      <time-line :list="list" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import TimeLine from "@/components/timeline";

export default {
  components: {
    TimeLine
  },
  computed: {
    ...mapState({
      list: state => state.page.detail.timeline
    })
  }
};
</script>
<style lang="less" scoped>
.timeline {
  margin-top: 15px;
  .title {
    color:rgba(51,51,51,1);
    font-size: 20px;
    font-weight: bold;
    line-height: 75px;
    height: 75px;
  }
  .timeline-detail {
    border-radius: 10px;
    border: 1px solid rgba(230, 230, 230, 1);
  }
}
</style>


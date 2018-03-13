<template>
    <div data-page="forms" class="messager-wrap">
        <h3>作業安全自動檢查表</h3>
        <f7-block-title>space </f7-block-title>
        <f7-block v-for="form in formStructure.space">
        <f7-link :href="form.href">
            <h4> {{form.title}}</h4>
        </f7-link>
        </f7-block>
        <br/>
        <f7-block-title>vehicle </f7-block-title>
        <f7-block v-for="form in formStructure.vehicle">
            <f7-link :href="form.href" class="main-icon">
                <h4> {{form.title}}</h4>
            </f7-link>
        </f7-block>

        <f7-block v-for="form in formStructure.facility">
            <f7-link :href="form.href" class="main-icon">
                <h4> {{form.title}}</h4>
            </f7-link>
        </f7-block>

        <f7-block v-for="form in formStructure.worksafe">
            <f7-link :href="form.href" class="main-icon">
                <h4> {{form.title}}</h4>
            </f7-link>
        </f7-block>
    </div>
</template>


<script>

export default {
  data: function (){
    return {
      formStructure : {
        'space': [
            {title: "局限空間作業設備檢查表", href: '/forms/space-check2'},
            {title: "局限空間作業檢點表", href: '/forms/space-check1' }
        ],
        'vehicle': [
            {title: "一般車輛每日作業檢點表", href: '/forms/vehicle-check1'},
            {title: "一般車輛安全自動檢查表", href: '/forms/vehicle-check2'},
            {title: "車輛系營建機械每月安全自動檢查表", href: '/vehicle-check3'},
        ],
        'facility': [
            {title: "門型起重機每日安全自動檢查表", href: '/forms/facility-check1'},
            {title: "挖土機作業安全", href: '/forms/facility-check2'},
            {title: "施工架(□組立□拆除)作業", href: '/forms/facility-check3'},
            {title: "施工架作業每週安全", href: '/forms/facility-check4'},
            {title: "施工爬梯（上下設備）作業安全", href: '/forms/facility-check4'},
            {title: "人員搭乘設備", href: '/forms/facility-check5'},
        ],
        'worksafe': [
            {title: "露天開挖作業安全", href: '/worksafe-check1'},
            {title: "混凝土澆置作業安全", href: '/worksafe-check2'},
            {title: "通風作業安全", href: '/worksafe-check3'},
            {title: "缺氧作業安全", href: '/worksafe-check4'},
        ]
      }
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>
<style scoped >


</style>

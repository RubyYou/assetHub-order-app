<template>
    <div data-page="forms" class="form-page">
        <br/><br/>
        <f7-block-title>空間作業檢點表</f7-block-title>
        <f7-list>
            <f7-list-item
                v-for="form in formStructure.space"
                :link="form.href"
                :title="form.title">
            </f7-list-item>
        </f7-list>

         <f7-block-title>車輛作業檢點表</f7-block-title>
        <f7-list>
            <f7-list-item
                v-for="form in formStructure.vehicle"
                :link="form.href"
                :title="form.title">
            </f7-list-item>
        </f7-list>

       <f7-block-title>機具作業檢點表</f7-block-title>
        <f7-list>
            <f7-list-item
                v-for="form in formStructure.facility"
                :link="form.href"
                :title="form.title">
            </f7-list-item>
        </f7-list>

        <f7-block-title>勞工安全作業檢點表</f7-block-title>
        <f7-list>
            <f7-list-item
                v-for="form in formStructure.safety"
                :link="form.href"
                :title="form.title">
            </f7-list-item>
        </f7-list>
    </div>
</template>
<script>

export default {
  data: function (){
    return {
      formStructure : {
        'space': [
            {title: "局限空間作業檢點表", href: '/forms/standardSections/SpaceCheckFormA' },
            {title: "局限空間作業設備檢查表", href: '/forms/standardSections/SpaceCheckFormB'},
        ],
        'vehicle': [
            {title: "一般車輛每日作業檢點表", href: '/forms/standard/VehicleCheckFormA'},
            {title: "一般車輛安全自動檢查表", href: '/forms/standard/VehicleCheckFormB'},
            {title: "車輛系營建機械每月安全自動檢查表", href: '/forms/standard/VehicleCheckFormC'},
        ],
        'facility': [
            {title: "門型起重機每日安全自動檢查表", href: '/forms/standardSections/FacilityCheckFormA'},
            {title: "門型起重機每月定期檢查表", href: '/forms/standardSections/FacilityCheckFormB'},
            {title: "挖土機作業安全", href: '/forms/standard/FacilityCheckFormC'},
            {title: "吊掛用具作業安全自動檢查表", href: '/forms/standardSections/FacilityCheckFormD'},
            {title: "施工架(□組立□拆除)作業", href: '/forms/standard/FacilityCheckFormE'},
            {title: "施工架作業每週安全自動檢查表", href: '/forms/standard/FacilityCheckFormF'},
            {title: "施工爬梯（上下設備）作業安全自動檢查表", href: '/forms/standardSections/FacilityCheckFormG'},
            {title: "人員搭乘設備每月定期檢查紀錄表", href: '/forms/standardSections/FacilityCheckFormH'},
            {title: "人員搭乘設備每日定期檢查紀錄表", href: '/forms/standard/FacilityCheckFormI'},
            {title: "門型起重機每日檢查表", href: '/forms/standard/FacilityCheckFormJ'}
        ],
        'safety': [
            {title: "露天開挖作業安全", href: '/forms/standard/SafetyCheckFormA'},
            {title: "混凝土澆置作業安全", href: '/forms/standard/SafetyCheckFormB'},
            {title: "通風作業安全自動檢查表", href: '/forms/standardSections/SafetyCheckFormC'},
            {title: "缺氧作業安全自動檢查表", href: '/forms/standard/SafetyCheckFormD'}
        ]
      }
    }
  }
}
</script>
<style scoped >


</style>

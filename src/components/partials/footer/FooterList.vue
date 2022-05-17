<template>
    <div class="col-3">
        <ul>
            <th v-if="list.title">{{list.title}}</th>
            <th v-else><br></th>
            <li v-for="(obj, index) in list.items" :key="index">{{obj.item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FooterList',
    props:{
        list: Object,
    }
}
</script>

<style lang="scss" scoped>
ul{
        th{color: black; padding-bottom: 5px;}
        li{list-style: none; padding: 5px 0; font-size: 14px;}
    }
</style>
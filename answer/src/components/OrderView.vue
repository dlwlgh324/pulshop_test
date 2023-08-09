<template>
    <div class="container">
        <div class="order_box">
            <h2 class="order_title">주문/배송 조회</h2>
            <div class="order_search">
                <h3 class="order_search_title">조회 기간</h3>
                <div class="order_search_form">
                    <div class="order_date">
                        <input type="text" readonly="readonly" name="startDate" id="start">
                    </div>
                    <span>~</span>
                    <div class="order_date">
                        <input type="text" readonly="readonly" name="endDate" id="end">
                    </div>
                    <div class="date_btn">
                        <button type="button" value="3">3개월</button>
                        <button type="button" value="6">6개월</button>
                        <button type="button" value="9">9개월</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import script from '../assets/script.js'
    import $ from 'jquery';

    export default {
        name: 'OrderView',
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style>
    .order_box {
        position: relative;
        display: block;
        padding: 30px 0;
    }

    .order_title {
        padding-bottom: 20px;
    }

    .order_search {
        padding: 20px 0;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        display: flex;
    }

    .order_search_form {
        display: flex;
    }
</style>
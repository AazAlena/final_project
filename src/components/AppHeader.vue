<script>
    export default {
        methods:{
            goAll(){
                this.$router.push({
                    name: 'all'
                })
                
            },
            goMus(){
                this.$router.push({
                    name: 'mus'
                })
            },
            goPlay(){
                this.$router.push({
                    name: 'play'
                })
            },
            goActors(){
                this.$router.push({
                    name: 'actors'
                })
            }
        }
    }
</script>
<template>
    <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"  style="margin-right: 20px;" >
            <img class="bi me-2" width="70" height="70" role="img" aria-label="Bootstrap" src="/src/assets/icons8-theatre-50.png" alt="">
        </a>
        <div class="col" >
            <button @click="goAll" style="margin: 5px;" class="btn all">Все концерты</button>
            <button @click="goMus" style="margin: 5px" class="btn btn-outline-secondary">Мюзиклы</button>
            <button @click="goPlay" style="margin: 5px; margin-right: 50px;" class="btn btn-outline-secondary">Спектакли</button>
            <button @click="goActors" style="margin: 5px" class="btn btn-outline-secondary">Наши актёры</button>
        </div>
        <div class="col col-lg-auto mb-3 mb-lg-0 me-lg-3" style="margin-bottom: 20px;">
            <div class="row" style="font-size: 30px; color:rgb(105,117,125)">+7 999 222 55 66</div>
            <div class="row" style="font-size: 18px; color:rgb(255, 255, 255)"> с 9:00 до 23:00 по МСК</div>
            <div class="row" style="font-size: 20px; color:rgb(105,117,125)">Электронная почта</div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>

.all{
    color: white;
    border: 1px solid white;
}

.all:hover{
    color: white;
    border: 1px solid rgb(105,117,125);
    background-color: rgb(105,117,125);
}

header{
    margin-bottom: 50px;
}

</style>
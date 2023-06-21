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
            }
        }
    }
</script>
<template>
    <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <div class="col" >
            <button @click="goAll" style="margin: 5px" class="btn btn-outline-secondary">Все концерты</button>
            <button @click="goMus" style="margin: 5px" class="btn btn-outline-secondary">Мюзиклы</button>
            <button @click="goPlay" style="margin: 5px" class="btn btn-outline-secondary">Спектакли</button>
        </div>
        
      </div>
    </div>
  </header>
</template>

<style>
.btn-outline-secondary{
    color: white
}

header{
    margin-bottom: 50px;
}

</style>
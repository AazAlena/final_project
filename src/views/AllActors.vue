
<script>

import axios from 'axios';
import dayjs from 'dayjs';

export default {
    data(){
        return {
            actors:[]
        }
    },
    methods: {
        async loadActors() {
            let response = await axios.get('/actors/all');
            this.actors = response.data;

            console.log(this.actors)
        },
        day(date){
            
            return ( dayjs(date).format('DD/MM/YYYY'))
        }
    }, 
    mounted(){
        this.loadActors();
    }
}
</script>


<template>
    <div class="container" style="justify-content: center;">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="(item, index) in actors" class="col" style="max-width: 40%;">
                <div class="card q">
                    <div><img :src="'src/assets/'+item.image+'.jpg'" class="card-img-top" style="width: 30%; height: auto; border-radius: 5px;" alt="..."></div>
                    <div class="card-body w">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p>Дата рождения: {{day(item.born)}}</p>
                    </div>
                    <h6>Учавствовал(а) в постановках:</h6>
                    <ul class="list-group">
                        <li  v-for="(item2, index2) in item.performances" class="list-group-item">{{ item2.title }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.btn-outline-secondary{
    color: grey
}

.q{
    border: none;   
}

.w{
    padding: 0;
    padding-top: 5%;
}

</style>
<script>
export default{
  data(){
    return{
      path: ['Home', 'Cusines' , 'Chinese' , 'Restaurants' , 'Sui Mai Restaurant'],
      description: 'Shumai is a type of traditional Chinese dumpling. In Cantonese cuisine, it is usually served as a dim sum snack. In addition to accompanying the Chinese diaspora, a variation of shumai also appears in Japan as and various southeast Asian countries. The wrapping is a very thin, round sheet of unleavened dough, with a pleat border. There is only one kind of filling, which mainly consists of chopped or minced mutton, scallion and ginger. Hohhot shaomai ',
      allergies: {
        name: ['Spicy' , 'Vegan' , 'Gluten Free' , 'Top Rated'],
        src: ['spicy.svg' , 'vegan.svg' , 'gluten-free.svg' , 'crown.svg']
      },
      hearts: {
        count: 124,
        iconPath: 'heart-single.svg',
        color: '#fe48481a',
      },
      stars: {
        count: 4.4,
        iconPath: 'star.svg',
        color: '#F3E6D3',
      },
      reviews: {
        count: '50 reviews',
        iconPath: 'review.svg',
        color: '#E2EAE1',
      },


    }
  },
}
</script>


<template>
  <div class="w-screen h-screen bg-mainBackground ">
    <navbar />
    <directories :path="path" />

    <div class="grid grid-cols-10">
      <div class="col-span-4 flex flex-col pl-10 pr-12  xl:col-span-5 2xl:col-span-6">

        <div class="flex justify-between pb-2 items-center">
          <h1 class="text-4xl font-bold">Sui Mai Restaurant</h1>
          <InfoRounded :statistics="hearts" />
        </div>

        <div class="flex justify-between pb-11">
          <h1 class="text-xl text-mattBlack/60 text-bold">Fine Dining</h1>
          <div class="flex gap-4">
            <InfoRounded :statistics="stars" />
            <InfoRounded :statistics="reviews" />
          </div>
        </div>

        <profileInfo />

        <div class="grid grid-cols-10 h-full">
          <div class="col-span-3 flex flex-col justify-between">

            <div class="flex flex-col gap-4">
              <Allergy v-for="(name , index) in allergies.name"  :allergyName="name" :iconSrc="allergies.src[index]" />
            </div>

            <div class="flex gap-5">
              <div class="h-full w-1 bg-scrollingbar rounded-full"></div>
              <div class="flex flex-col gap-5">
                <div class="flex">
                  <div class="w-1 h-7 bg-scrollthumb left-10 absolute rounded-full"></div><p>Overview</p>
                </div>
                <p>Ingredients</p>
                <p>Recipie</p>
                <p>Nutrition facts</p>
                <p>Reviews</p>
                <p>Similar</p>
              </div>
            </div>


          </div>
          <div class="col-span-7 bg-cyan-500 "></div>
        </div>

      </div><!-- left section -->


      <div class="col-span-6 xl:col-span-5 2xl:col-span-4">
        <img src="~/assets/img/illustration.png" alt="japanese illustration ink drawing" class="w-full">
        <p class="leading-description-line-height pr-7 pb-5" >
          {{ description }}
        </p>
        
        <div class="flex gap-3 font-bold text-aquamarine underline">
          <p>Read More</p>
          <img src="~/assets/img/down-arrow-green.svg" alt="">
        </div>
        
      </div>
    </div><!-- right section -->
    
  </div>
</template>

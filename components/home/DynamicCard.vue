<template>
  <v-container>
    <v-card elevation="8">
      <v-row class="align-center mt-3">
        <v-col lg="6" md="6" sm="6" >
          <v-row>
            <v-col class="klein" md="1" sm="1"  >
              <div class="small-box"/>
            </v-col>
            <v-col class="klein2" md="10" sm="10">
              <div class="text">
                22 July 2022 - Tenant name
              </div>
              <div class="title mt-1">
                <a href="###">Relaunch volkswagen.com</a>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col lg="6" md="6">
          <v-card height="48px" width="95px" class="grey-box mr-12">
            <v-row class="mt-0">
              <v-col class="ml-1">
                <v-img src="img/Icon_awesome-hourglass-start.png" max-height="24px" max-width="18px"/>
              </v-col>
              <v-col class="mr-1">
                <div>
                  Project Started
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-divider class="divider mt-5 mr-10 ml-10 mb-5"/>
      </v-row>
      <v-row>
        <v-col>
          <div class="text ml-10">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ml-10 mb-4 mt-2">
          <v-img src="img/Icon_material-comment.png" max-height="24px" max-width="24px"/>
          <div class="bold ml-2">
            24 comments
          </div>
        </v-col>
        <v-col class="d-flex mb-4 mt-2 mr-12 justify-end">
          <v-img src="img/Icon_feather-thumbs-up.png" max-height="24px" max-width="24px"/>
          <div class="bold ml-2">
            1.2K likes
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Nunito');

@media (max-width: 600px){
  .klein {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .klein2 {
    flex: 0 0 8.3333333333%;
    max-width: 87.33%;
  }
}

.small-title {
  text-align: left;
  font: normal normal normal 16px/22px Nunito;
  letter-spacing: 0.4px;
  color: #1C1C1C;
  opacity: 1;
}

.title {
  text-align: left;
  font: normal normal bold 20px/27px Nunito;
  letter-spacing: 0.5px;
  color: #0965CB;
  opacity: 1;
}

.small-box {
  background: primaryTextPale 0% 0% no-repeat padding-box;
  border-radius: 0px 4px 4px 0px;
  opacity: 1;
  top: 186px;
  left: 620px;
  width: 10px;
  height: 48px;
}

.divider {
  border: 0.5px solid #707070;
  opacity: 0.23;
}

.bold {
  font: normal normal bold 14px/19px Nunito;
  letter-spacing: 0.35px;
  color: #1C1C1C;
  opacity: 1;
}

.grey-box {
  background-color: #1C1C1C15;
  float: right;
  text-align: left;
  font: normal normal normal 13px/15px Nunito;
  letter-spacing: 0.33px;
  color: #1C1C1C;
  opacity: 1;
}

</style>
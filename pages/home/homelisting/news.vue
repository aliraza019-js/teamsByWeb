<template lang="pug">
v-row(class="overflow-auto h-100")
    //- v-col(cols="12" class="d-flex justify-end pb-0")
    //-   v-btn(variant="text" prepend-icon="mdi-plus" density="compact") Projekt hinzufügen
    //- :to="localePath(`/d/project/project/${item.data._id}/general`)"
    //- @click="navigateToUrl(item)"
    v-col(cols="12")
        v-col(v-if="!dynamicComponent"  cols="12" v-for="item , index in newsData" :key="index" @click="navigateToUrl(item)" class="cursor-pointer" )
            CommonCard
                template(#title)
                    div(class="d-flex flex-column")
                        span(class="text-body-2") {{item.data?.dateTo ? formatDateRange(item.data?.dateTo, item.data?.dateFrom) : item.subtitle ? formatDateForNews(item.createdAt?.substring(0,10)) + '-' + item.subtitle?.en : item.type == 'project' ? formatDateForNews(item.createdAt?.substring(0,10)) + '-' +  item.data?.orgName : formatDateForNews(item.data?.date?.substring(0,10)) + '-' +  '1.1.1970'}}
                        p(class="text-secondary") {{item.title?.en}}
                    div(v-if="item.type != 'project'" class="d-flex px-2 rounded-lg align-center justify-space-around")
                        v-avatar(size=50)
                            img(
                                :src="item.type == 'newMember' ? item.data?.profileImage?.url : item.user?.profileImage ? item.user.profileImage.url : 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'",
                                @error="handleImageError"
                                alt="User Avatar"
                                class="newsAvatar"
                                )
                        //- v-avatar(size="40" @error="handleImageError" :image="item.type == 'newMember' ? item.data?.profileImage?.url : item.user?.profileImage ? item.user.profileImage.url : 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'")
                    div(v-if="item.type == 'project'" class="d-flex px-2 rounded-lg align-center justify-space-around project-status")
                        v-img(class="pl-2" width="25px" :src="item.data?.status == 'done' ? done : timer")
                        div(class="d-flex text-body-2 text-capitalize") {{item.data?.status}}
                template(#body)
                    v-container(class="px-0")
                        v-row
                            v-col(v-if="item.type == 'project'" cols="12" sm="3")
                                v-img(class="rounded-lg" cover :height="200"  :src="item.user && item.user.profileImage ? item.user.profileImage.url : 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'" )
                            v-col(cols="12" :sm="item.type == 'project' ? 9 : 12" class="d-flex justify-space-evenly flex-column")
                                div(class="d-flex mb-3 justify-space-between")
                                    p(class="text-capitalize") {{item.body?.en}} 
                                p(class="text-justify") {{ item.data?.desc }} 
                            v-col(cols="12" class="d-flex justify-space-between")
                                div(class="d-flex align-center")
                                    v-icon(color="primaryTextPale" size="large" icon="mdi-message-reply-text")
                                    p(class="font-weight-bold cursor-pointer ml-2" @click.stop="loadDynamicComponent(item.data?._id)") {{ item.commentsCount? item.commentsCount: '0'  }} comments
                                div(class="d-flex align-center" @click.stop="addLiked(item)")
                                    v-icon(color="primaryTextPale" :class="{'liked': item.liked}" class="like-icon" size="large" :icon="item.userLiked? 'mdi-thumb-up':'mdi-thumb-up-outline'")
                                    p(class="font-weight-bold cursor-pointer ml-2") {{ item.likesCount ? item.likesCount+'': '0'}} likes
        component(:is="dynamicComponent")
</template>
        
<script setup>
import done from '@/assets/icons/project/done.svg';
import timer from '@/assets/icons/project/timer.svg';
import DynamicComponent from '~/components/common/commentModule.vue';
import { userHomeStore } from "~/stores/home";
import { ref, provide } from 'vue';
const news = ref({});
const localePath = useLocalePath()
const route = useRoute()
const { getAllnews } = userHomeStore()
const newsData = ref([]);
const loading = ref(false)
const relationalId = ref("")

const dynamicComponent = ref(null);

const loadDynamicComponent = (id) => {
    relationalId.value = id
    dynamicComponent.value = DynamicComponent;
};

const handleImageError = (event) => {
    const defaultImage =
        'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';

    event.target.src = defaultImage;
};

provide('relationalId', relationalId);



onMounted(async () => {
    news.value = await getAllnews(99, 0)
    newsData.value = news.value.data;
})

/**
 * Navigates to the comments section of a specific project.
 *
 * @param {number} id - The unique identifier of the project
 * @return {void} 
 */
const navigateToComments = (id) => {
    const router = useRouter();
    // console.log('id navigateToComments', id)
    const relationalId = id;
    const path = `/d/project/project/${relationalId}/comment`;

    router.replace({ path });
    // :to="localePath(`${item.type == 'project' ? `/d/project/project/${item.data?._id}/general`: item.type == 'training' ? `/account/trainings` : '/account/certifications' }`)"
};


const navigateToUrl = (item) => {
    const router = useRouter();

    console.log('router path', item)
    if (item.type == 'project') {
        const projectId = item.data?._id;
        const path = `/d/project/project/${projectId}/general`;
        router.push({ path });
    } else if (item.type == 'training') {
        const path = `/account/trainings`;
        router.push({ path });
    } else {
        const path = `/account/certifications`;
        router.push({ path });
    }

};

/**
 * Formats the given date range into a localized string and replaces '/' with '.'.
 *
 * @param {Date} dateTo - the end date of the range to be formatted
 * @param {Date} dateFrom - the start date of the range to be formatted
 * @return {string} the formatted date range string
 */
const formatDateRange = (dateTo, dateFrom) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const locale = 'en';

    /**
     * Formats the given date into a localized string and replaces '/' with '.'.
     *
     * @param {Date} date - the date to be formatted
     * @return {string} the formatted date string
     */
    const formatDate = (date) => {
        const formattedDate = new Date(date).toLocaleDateString(locale, options);
        return formattedDate.replace(/\//g, '.');
    };

    const formattedDateTo = formatDate(dateTo);
    const formattedDateFrom = formatDate(dateFrom);

    return `${formattedDateFrom} - ${formattedDateTo}`;
}

/**
 * Async function to add a like to a project.
 *
 * @param {Object} project - The project object to add a like to
 * @return {void} 
 */
const addLiked = async (itemData) => {
    console.log('itemData', itemData);
    loading.value = true;
    const payload = {
        oid: itemData._id,
        type: 'news'
    };
    const resLikes = await myFetch('/v2/likes/toggle', { method: 'POST', body: { ...payload } });

    if (resLikes) {
        loading.value = false;
        const ProjectData = newsData.value.find(item => {
            console.log('item ProjectData', item);
            if (item._id === itemData._id) {
                item.userLiked = !item.userLiked;
                item.likesCount = item.userLiked ? 1 : 0;
                item.liked = true; // Flag to trigger the transition
            }
        });

        setTimeout(() => {
            const ProjectData = newsData.value.find(item => {
                if (item._id === itemData._id) {
                    item.liked = false; // Reset the flag after the transition duration
                }
            });
        }, 300); // Adjust the duration to match your CSS transition duration
    }
};


/**
 * Formats a date string for use in news articles.
 *
 * @param {string} dateString - The date string to be formatted
 * @return {string} The formatted date string
 */
const formatDateForNews = (dateString) => {
    if (!dateString) {
        return '';
    }

    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const locale = 'en';

    const [day, month, year] = new Date(dateString).toLocaleDateString(locale, options).split('/');
    return `${parseInt(day)}.${parseInt(month)}.${year}`;
};

definePageMeta({
    activeRoute: 'team'
})

</script>
        
        
<style scoped lang="scss">
.cursor-pointer {
    cursor: pointer !important;
}

.like-icon {
    transition: transform 0.3s ease-in-out;
}

.like-icon.liked {
    animation: scaleIn 0.3s ease-in-out forwards;
}

@keyframes scaleIn {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}

.like-icon:hover {
    transform: scale(1.2);
}

.newsAvatar {
    max-width: 80px;
    max-height: 80px;
}
</style>
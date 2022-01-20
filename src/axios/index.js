// 引入axios
import axios from 'axios';
// 首页 热门 好评
const HOT_HP = "/api/ajax/topRatedMovies?token=&optimus_uuid=D9F1FC20DDF611EB8EE9456AD6CD7F17CA182499ADC145FEADD38EE5319B88AA&optimus_risk_level=71&optimus_code=10"
// 首页 热门 列表
const HOT_MOVIE_LIST = "/api/ajax/movieOnInfoList"

// 城市列表
const CITY_LIST = "/api/dianying/cities.json"

// 影片详情
const MOVIE_DETAIL = "/api/api/mtrade/mmdb/movie/v5/"


// 详情影院列表
const DETAIL_CINEMAS = "/api/api/mtrade/mmcs/cinema/v1/select/movie/cinemas.json"

// 详情页面选项卡
const DETAIL_SELECT = "/api/api/mtrade/mmcs/cinema/v1/select/items.json"
// 详情时间
const DETAIL_TIME = "/api/api/mtrade/mmcs/show/v1/movie/showdays.json"

// 待映
const WILL_HEAD = "/api/ajax/mostExpected?ci=76&limit=10&offset=0&token=&optimus_uuid=D9F1FC20DDF611EB8EE9456AD6CD7F17CA182499ADC145FEADD38EE5319B88AA&optimus_risk_level=71&optimus_code=10"
const WILL_TEXT = "/api/ajax/comingList?ci=76&token=&limit=10&optimus_uuid=D9F1FC20DDF611EB8EE9456AD6CD7F17CA182499ADC145FEADD38EE5319B88AA&optimus_risk_level=71&optimus_code=10"


//home页面影院
const Cinema = "/api/ajax/moreCinemas"

// home页面经典电影
const Oldercinema = "/api/ajax/moreClassicList?sortId=1&showType=3&limit=20&offset=10&optimus_uuid=D9F1FC20DDF611EB8EE9456AD6CD7F17CA182499ADC145FEADD38EE5319B88AA&optimus_risk_level=71&optimus_code=10"

// 筛选时间
const dataForCinema = "/api/api/mtrade/mmcs/cinema/v2/select/movie/cinemas.json?"
// home页面经典电影
function getOldCityList() {
    return axios.get(Oldercinema);
}


function getCinema(time, city) {
    return axios.get(Cinema, {
        params: {
            day: time,
            offset: 0,
            limit: 20,
            item: "",
            updateShowDay: "true",
            reqId: 1626052132426,
            cityId: city,
            optimus_uuid: "D9F1FC20DDF611EB8EE9456AD6CD7F17CA182499ADC145FEADD38EE5319B88AA",
            optimus_risk_level: 71,
            optimus_code: 10
        }
    })
}

function getDetailSelect(movieid, time, cityId) {
    return axios.get(DETAIL_SELECT, {
        params: {
            movieId: movieid,
            showDate: time,
            cityId: cityId
        }
    })
}

// 城市列表
function getCityList() {
    return axios.get(CITY_LIST)
}


// 首页 热门 好评
function getHotHp() {
    return axios.get(HOT_HP);
}

// 首页 热门 列表
function getHotMovieList() {
    return axios.get(HOT_MOVIE_LIST, {
        params: {
            token: "",
            optimus_uuid: "D9F1FC20DDF611EB8EE9456AD6CD7F17CA182499ADC145FEADD38EE5319B88AA",
            optimus_risk_level: 71,
            optimus_code: 10
        }
    })
}

// 影片详情
function getMovieDetail(movieid) {
    return axios.get(MOVIE_DETAIL + movieid + ".json")
}

// 详情影院列表
function getDetailCinemas(movieid, time, cityId) {
    return axios.get(DETAIL_CINEMAS, {
        params: {
            limit: 10,
            offset: 0, //从哪里开始
            utm_term: 7.5,
            channelId: 4,
            client: "iphone",
            movieId: movieid,
            showDate: time,
            cityId: cityId,
            ci: 76
            // areaId=-1&brandId=-1&districtId=-1&hallType=-1&lineId=-1&movieId=1336183&serviceId=-1&stationId=-1&showDate=2021-07-09&cityId=76&ci=76
        }
    })
}

// 详情-时间
function getDetailTime(movieid, cityId) {
    return axios.get(DETAIL_TIME, {
        params: {
            movieId: movieid,
            cityId: cityId
        }
    })
}

// 筛选时间
function getDataForCinema(Id, cityId, date) {
    return axios.get(dataForCinema, {
        params: {
            movieId: Id,
            cityId: cityId,
            limit: 20,
            showDate: date,
            client: 'iphone',
            offset: 0,
            ci: 76,
            utm_term: 7.5,
            channelId: 4
        }
    })
}


// 待映-头
function getWillHeader() {
    return axios.get(WILL_HEAD)
}
// 待映-内容
function getWillText() {
    return axios.get(WILL_TEXT)
}
// 请求电影详情介绍评论页代码
function getHtmlText(url) {
    return axios.get(url, {
        // headers: {
        //     'content-type': 'text/html;charset=utf-8',
        //     'Accept': 'text/html,application/xhtml+xml,application/xml'
        // }
    })
}
export default {
    getHtmlText,
    getDetailTime,
    getDetailSelect,
    getDetailCinemas,
    getHotMovieList,
    getHotHp,
    getCityList,
    getMovieDetail,
    getWillHeader,
    getWillText,
    getCinema,
    getOldCityList,
    getDataForCinema
}
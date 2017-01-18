import request from '../utils/request';
import qs from 'qs';

export async function fetchArticleList(params) {
    return request(`http://admin.wangliang.lol/api/article/list?${qs.stringify(params)}`, {});
}
























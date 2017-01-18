import { observable, action } from "mobx";
import { fetchArticleList } from '../../servers/article';

class Article {
    @observable list;
    @observable count;
    @observable pageNum;
    @observable totalPage;
    @observable loading;

    constructor(){
        this.list = [];
        this.pageNum = 1;
        this.count = 0;
        this.totalPage = 1;
        this.loading = false
    }

    @action
    getArticleList = async (payload) => {
        this.loading = true;
        const { data } = await fetchArticleList(payload);
        if (data.code === 200) {
            this.loading = false;
            this.list = data.list;
            this.count = data.count;
            this.pageNum = data.page;
            this.totalPage = data.total_page;
        }
    }

}

const article = new Article();
export default article

import Api from '@/services/Api'

export default {
    index() {
        return Api().get('tablets')
    },
    show(tabletId){
        return Api().get('tablet/'+tabletId)
    },
    post(tablet){
        return Api().post('tablet', tablet)
    },
    put(tablet){
        return Api().put('tablet/'+tablet.id, tablet)
    },
    delete(tablet){
        return Api().delete('tablet/'+tablet.id, tablet)
    },
}
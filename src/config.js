export const ApiConfig = {
    CATURL: "https://apicbdev.ipraticocloud.com/api/public/product-categories",
    PRODURL: "https://apicbdev.ipraticocloud.com/api/public/products",
    TOKEN: "11871:1956ef39-b817-44c6-9cde-13525ece54d9",
    ROUTER: null,
    ORDERP: "0",
    f2: function orderCategorie(o1, o2) {
        var s1 = o1.value.sorting;
        var s2 = o2.value.sorting;
        const n1 = s1 ? parseInt(s1) : Number.MAX_SAFE_INTEGER;
        const n2 = s2 ? parseInt(s2) : Number.MAX_SAFE_INTEGER;
        if (n1 != n2) {
            return n1 < n2 ? -1 : 1;
        }
        return o1.value.name < o2.value.name ? o1 === o2 ? 0 : -1 : 1;
    },
    f1: function orderprodotti(o1, o2, order) {
        var isNome= order && Number(order)===1
        if (!isNome) {
            var t1 = Number.MAX_VALUE;
            var t2 = Number.MAX_VALUE;
            if (o1.value.prices && o1.value.prices.length>0) {
                t1= Number(o1.value.prices[0].price);
            }
            if (o2.value.prices && o2.value.prices.length>0) {
                t2= Number(o2.value.prices[0].price);
            }
            if (t1 != t2) {
                return t1 < t2 ? -1 : 1;
            }
        }
        return o1.value.name < o2.value.name ? o1 === o2 ? 0 : -1 : 1;


    }
}

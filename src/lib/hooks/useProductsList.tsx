"use client"
import {useEffect, useState} from "react";
import prisma from "@/lib/db";

const useProductsList =  () => {
    const [productLists, setProductLists] = useState()
    const [loadingProductLists, setLoadingProductLists] = useState(true);
    const [errorProductLists, setErrorProductLists] = useState(null);

    useEffect(() => {
        setLoadingProductLists(true)
        const fetchData = async () => {
            try {
                const data = await prisma.product.findMany({
                    orderBy : {
                        createdAt : "desc"
                    }
                })
                setProductLists(data)
                setLoadingProductLists(false)
            }catch (e) {
                setLoadingProductLists(false)
                setErrorProductLists(e)
            }
        }
    }, []);

    return {productLists, loadingProductLists, errorProductLists}
}
export default useProductsList
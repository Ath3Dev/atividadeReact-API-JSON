import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import pageInfo from '../assets/img/pageSingleProduct/pageInfo.svg'
import '../assets/css/SingleProduct.css'

export function SingleProduct() {
    const [itemId, setItemId] = useState({});
    const { id } = useParams();

    const getItemId = async () => {
        try {
            const res = await fetch(`http://localhost:3001/products/${id}`);
            const response = await res.json();
            setItemId(response);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    }

    useEffect(() => {
        getItemId();
    }, [id]);

    return (
        <div className="singleProduct">
            <div className="pageInfo">
                <img src={pageInfo} alt="" />
            </div>
            <div className="productContainer">
                <div className="img">
                    {itemId.image && <img src={itemId.image} alt="" />}
                </div>
                <div className="text">
                    <h2>{itemId.name}</h2>
                    <h3>R$ {itemId.price}</h3>
                    <div className="descricao">
                        <strong>{itemId.description}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

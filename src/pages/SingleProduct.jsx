import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

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
            {itemId.image && <img src={itemId.image} alt="" />}
            <h2>{itemId.name}</h2>
            <h3>R$ {itemId.price}</h3>
            <strong>{itemId.description}</strong>
        </div>
    )
}

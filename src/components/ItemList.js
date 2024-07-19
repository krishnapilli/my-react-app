import React, { useState, useEffect } from 'react';
import { getItems, deleteItem } from '../services/itemService';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await getItems();
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteItem(id);
            fetchItems(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div>
            <h1>Item List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.description}
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;

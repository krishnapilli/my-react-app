import React, { useState } from 'react';
import { createItem, updateItem } from '../services/itemService';

const ItemForm = ({ item, onSave }) => {
    const [name, setName] = useState(item ? item.name : '');
    const [description, setDescription] = useState(item ? item.description : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const itemData = { name, description };

        try {
            if (item) {
                await updateItem(item.id, itemData);
            } else {
                await createItem(itemData);
            }
            onSave(); // Notify parent component to refresh data
        } catch (error) {
            console.error('Error saving item:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <button type="submit">{item ? 'Update' : 'Create'} Item</button>
        </form>
    );
};

export default ItemForm;

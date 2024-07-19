import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const handleSave = () => {
        setRefresh(!refresh);
        setSelectedItem(null); // Clear selected item after save
    };

    return (
        <div>
            <h1>Item Management</h1>
            <ItemForm item={selectedItem} onSave={handleSave} />
            <ItemList onEdit={setSelectedItem} key={refresh} /> {/* Use key to force re-render */}
        </div>
    );
};

export default App;

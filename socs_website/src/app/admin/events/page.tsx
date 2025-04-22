'use client';

import { useEffect, useState } from 'react';
import AdminForm from '@/components/adminForm';
import { fetchAll, saveRecord, deleteRecord, uploadFile } from '@/services/adminService';
import Loading from "@/components/loading";
import Alert from "@/components/alert";

interface EventUpdate {
    id: string;
    title: string;
    description: string;
    image: string;
    event: string;
}

const EventUpdatesPage = () => {
    const [eventUpdates, setEventUpdates] = useState<EventUpdate[]>([]);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        image: '',
        event: '',
    });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

    const showAlert = (message: string, type: 'success' | 'error' | 'info') => {
        setAlert({ message, type });
    };

    const loadEventUpdates = async () => {
        setLoading(true);
        try {
            const data = await fetchAll('events');
            setEventUpdates(data);
        } catch (error) {
            console.error('Error fetching event updates:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadEventUpdates();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return;
        const file = files[0];


        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setFormData({ ...formData, image: file });

        try {
            showAlert('Uploading image, please wait...', 'info');
            const imageUrl = await uploadFile(file, '/api/upload_image');
            setFormData({ ...formData, image: imageUrl });
            showAlert('Image uploaded successfully!', 'success');
        } catch (error) {
            console.error('Error uploading file:', error);
            showAlert('Failed to upload file.', 'error');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let imageUrl = formData.image;

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (formData.image instanceof File) {
                showAlert('Uploading image, please wait...', 'info');
                imageUrl = await uploadFile(formData.image, '/api/upload_image');
                showAlert('Image uploaded successfully!', 'success');
            }

            await saveRecord('events', { ...formData, image: imageUrl });
            setFormData({ id: '', title: '', description: '', image: '', event: '' });
            showAlert('Event update saved successfully!', 'success');
            loadEventUpdates();
        } catch (error) {
            console.error('Error saving event update:', error);
            showAlert('Failed to save event update.', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string, imagePath: string) => {
        try {
            await deleteRecord('events', id, imagePath);
            showAlert('Event update deleted successfully!', 'success');
            loadEventUpdates();
        } catch (error) {
            console.error('Error deleting event update:', error);
            showAlert('Failed to delete event update.', 'error');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loading />;

    return (
        <div className="min-h-screen">
            {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
            <h1 className="text-4xl font-semibold text-center py-8">Event Updates</h1>
            <AdminForm
                fields={[
                    {
                        label: 'Title',
                        name: 'title',
                        type: 'text',
                        value: formData.title,
                        onChange: handleChange,
                        required: true,
                    },
                    {
                        label: 'Description',
                        name: 'description',
                        type: 'text',
                        value: formData.description,
                        onChange: handleChange,
                        required: true,
                    },
                    {
                        label: 'Image',
                        name: 'image',
                        type: 'file',
                        onChange: (e) => handleFileUpload(e.target.files),
                        required: true,
                    },
                    {
                        label: 'Event',
                        name: 'event',
                        type: 'select',
                        options: [
                            { label: 'Let Me Hack', value: 'Let Me Hack' },
                            { label: 'FortNight', value: 'FortNight' },
                            { label: 'Virtual Rival', value: 'Virtual Rival' },
                            { label: 'TechTalk', value: 'TechTalk' },
                            { label: 'CodeNight', value: 'CodeNight' },
                            { label: 'Connecting Dots', value: 'Connecting Dots' },
                            { label: 'Vidunena', value: 'Vidunena' },
                        ],
                        value: formData.event,
                        onChange: handleChange,
                        required: true,
                    },
                ]}
                onSubmit={handleSubmit}
                buttonText={formData.id ? 'Update Event' : 'Add Event'}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6">
                {eventUpdates.map((item) => (
                    <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg text-center">
                        <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl text-white font-bold">{item.title}</h3>
                            <p className="text-white mt-2">{item.description}</p>
                            <p className="text-teal-300 font-medium mt-1">Event: {item.event}</p>
                        </div>
                        <div className="flex justify-end p-4">
                            <button
                                onClick={() => setFormData(item)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(item.id, item.image)}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventUpdatesPage;

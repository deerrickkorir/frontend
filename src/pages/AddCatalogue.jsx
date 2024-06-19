import { Button, Container, Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import NavigationBar from '../components/Navbar';
import { BASE_URL } from '../utils';

const schema = z.object({
	name: z
		.string({
			required_error: 'Name is required',
		})
		.min(1, { message: 'Name is required' }),
	description: z
		.string({
			required_error: 'Description is required',
		})
		.min(1, { message: 'Description is required' }),
	image: z
		.string({
			required_error: 'Image is required',
		})
		.min(1, { message: 'Image is required' })
		.url({ message: 'Enter a valid image url' }),
	supplier: z
		.string({
			required_error: 'Supplier is required',
		})
		.min(1, { message: 'Supplier is required' }),
	deposit_amount: z
		.string({
			required_error: 'Deposit amount is required',
		})
		.min(1, { message: 'Deposit amount is required' }),
	quantity_in_stock: z
		.string({
			required_error: 'Quantity in stock is required',
		})
		.min(1, { message: 'Quantity in stock is required' }),
	category: z
		.string({
			required_error: 'Category is required',
		})
		.min(1, { message: 'Category is required' }),
});

const AddCatalogue = () => {
	const [Category, setCategory] = useState([]);
	const [quantities, setQuantities] = useState([]);

	useEffect(() => {
		fetch(`${BASE_URL}/category`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => setCategory(data))
			.catch((err) => console.error('Error fetching categories:', err));
			
		// Fetch quantities for "quantity_in_stock" if needed
		// fetch(`${BASE_URL}/quantities`, {
		// 	method: 'GET',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => setQuantities(data))
		// 	.catch((err) => console.error('Error fetching quantities:', err));
	}, []);

	const { control, handleSubmit, formState } = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			name: '',
			description: '',
			image: '',
			supplier: '',
			deposit_amount: '',
			quantity_in_stock: '',
			category: '',
		},
	});

	const onSubmit = async (values) => {
		try {
			const response = await fetch(`${BASE_URL}/catalogue`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...values,
					deposit_amount: Number(values.deposit_amount),
					quantity_in_stock: Number(values.quantity_in_stock),
				}),
			});

			const data = await response.json();
			console.log(data);
		} catch (err) {
			console.error('Error submitting form:', err);
		}
	};

	return (
		<Container>
			<NavigationBar />
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="name"
					control={control}
					render={({ field, fieldState }) => (
						<Form.Group className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Name" {...field} />
							{fieldState.invalid && (
								<Form.Text className="text-danger">
									{fieldState.error.message}
								</Form.Text>
							)}
						</Form.Group>
					)}
				/>
				<Controller
					name="description"
					control={control}
					render={({ field, fieldState }) => (
						<Form.Group className="mb-3">
							<Form.Label>Description</Form.Label>
							<Form.Control as="textarea" placeholder="Description" {...field} />
							{fieldState.invalid && (
								<Form.Text className="text-danger">
									{fieldState.error.message}
								</Form.Text>
							)}
						</Form.Group>
					)}
				/>
				<Controller
					name="image"
					control={control}
					render={({ field, fieldState }) => (
						<Form.Group className="mb-3">
							<Form.Label>Image</Form.Label>
							<Form.Control type="url" placeholder="Image" {...field} />
							{fieldState.invalid && (
								<Form.Text className="text-danger">
									{fieldState.error.message}
								</Form.Text>
							)}
						</Form.Group>
					)}
				/>
				<Controller
					name="supplier"
					control={control}
					render={({ field, fieldState }) => (
						<Form.Group className="mb-3">
							<Form.Label>Supplier</Form.Label>
							<Form.Control type="text" placeholder="Supplier" {...field} />
							{fieldState.invalid && (
								<Form.Text className="text-danger">
									{fieldState.error.message}
								</Form.Text>
							)}
						</Form.Group>
					)}
				/>
				<Controller
					name="deposit_amount"
					control={control}
					render={({ field, fieldState }) => (
						<Form.Group className="mb-3">
							<Form.Label>Deposit Amount</Form.Label>
							<Form.Control type="number" placeholder="Deposit amount" {...field} />
							{fieldState.invalid && (
								<Form.Text className="text-danger">
									{fieldState.error.message}
								</Form.Text>
							)}
						</Form.Group>
					)}
				/>
				<Controller
					name="quantity_in_stock"
					control={control}
					render={({ field, fieldState }) => (
						<Form.Group className="mb-3">
							<Form.Label>Quantity in Stock</Form.Label>
							<Form.Control type="number" placeholder="Quantity in stock" {...field} />
							{fieldState.invalid && (
								<Form.Text className="text-danger">
									{fieldState.error.message}
								</Form.Text>
							)}
						</Form.Group>
					)}
				/>
				<Controller
					name="category"
					control={control}
					render={({ field, fieldState }) => (
						<Form.Group className="mb-3">
							<Form.Label>Category</Form.Label>
							<Form.Control type="text" placeholder="Category" {...field} />
							{fieldState.invalid && (
								<Form.Text className="text-danger">
									{fieldState.error.message}
								</Form.Text>
							)}
						</Form.Group>
					)}
				/>
				<Button variant="primary" type="submit" disabled={formState.isSubmitting}>
					{formState.isSubmitting ? 'Saving...' : 'Submit'}
				</Button>
			</Form>
		</Container>
	);
};

export default AddCatalogue;

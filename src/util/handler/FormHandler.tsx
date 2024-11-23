import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import ConfettiExplosion from 'react-confetti-explosion';

class FormHandler {
  private loading: boolean = false;

  constructor(
    private setForm: any,
    private API_URL: string,
    private router: any
  ) {}

  trakeChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    this.setForm((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  trakeBodyChanges = (content: string) => {
    this.setForm((prevState: any) => ({
      ...prevState,
      body: content,
    }));
  };

  async submit(
    e: React.FormEvent<HTMLFormElement>,
    formData: any,
    id?: string
  ) {
    e.preventDefault();
    const EDITMODE = !id ? false : id !== "new";
    this.loading = true;
    const url = EDITMODE ? `${this.API_URL}/${id}` : `${this.API_URL}`;
    const method = EDITMODE ? "PUT" : "POST";
    const headers = { "Content-Type": "application/json" };

    const res = await fetch(url, {
      method,
      headers,
      body: JSON.stringify({ formData }),
    });

    if (res.ok) {
      this.loading = false;
      toast.success(
        EDITMODE ? "Item updated successfully" : "Item added successfully"
      );
      <ConfettiExplosion />
      this.router.refresh();
      this.router.push("/admin");
    } else {
      this.loading = false;
      toast.error("Something went wrong");
      throw new Error(`Failed to ${EDITMODE ? "update" : "create"} ticket`);
    }
  }

  addCategory = (
    categoryInput: string,
    setCategoryInput: Dispatch<SetStateAction<string>>
  ) => {
    if (!categoryInput.trim()) {
      toast.error("name for the category is required");
      return;
    }

    const newCategory = {
      id: Date.now(),
      name: categoryInput,
    };

    this.setForm((prevState: { categories: any }) => ({
      ...prevState,
      categories: [...prevState.categories, newCategory],
    }));
    setCategoryInput(""); // Clear the input field
    toast.success("Category added successfully");
  };

  CategoryChanges = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const { value } = e.target;
    this.setForm((prevState: { categories: any[] }) => ({
      ...prevState,
      categories: prevState.categories.map((cat: { id: number }) =>
        cat.id === id ? { ...cat, name: value } : cat
      ),
    }));
  };

  removeCategory = (id: number) => {
    this.setForm((prevState: { categories: any[] }) => ({
      ...prevState,
      categories: prevState.categories.filter(
        (cat: { id: number }) => cat.id !== id
      ),
    }));
  };

  get isLoading(): boolean {
    return this.loading;
  }
}

export default FormHandler;

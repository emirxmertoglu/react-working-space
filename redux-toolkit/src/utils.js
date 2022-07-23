import store from "./stores";
import { login, logout } from "./stores/auth";
import { addTodo, editTodo, deleteTodo } from "./stores/todo";
import { openModal, closeModal } from "./stores/modal";

export const handleLogin = (user) => {
  store.dispatch(login(user));
};

export const handleLogout = () => {
  store.dispatch(logout());
};

export const handleAdd = (todo) => {
  store.dispatch(addTodo(todo));
};

export const handleEdit = (todo) => {
  store.dispatch(editTodo(todo));
};

export const handleDelete = (id) => {
  store.dispatch(deleteTodo(id));
};

export const handleOpen = (modal) => {
  store.dispatch(openModal(modal));
};

export const handleClose = () => {
  store.dispatch(closeModal());
};

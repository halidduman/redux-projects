import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/slices/crudSlice";

const FormModal = ({ editItem, isOpen, handleClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //* Formdata örneği oluştur
    const formData = new FormData(e.target);
    //* Inputlardaki bilgileri nesneye çevir
    const taskData = Object.fromEntries(formData.entries());

    if (editItem) {
      //* reducera güncellenecek elemanı haber ver
      dispatch(editTask({ id: editItem.id, ...taskData }));
    } else {
      //* reducera yeni taskın ekleneceğini haber ver
      dispatch(addTask(taskData));
    }

    //* modalı kapat
    handleClose();
  };

  return (
    <Modal centered show={isOpen} className="text-black">
      <Modal.Header>
        <Modal.Title>
          {editItem ? "Görevi Güncelle" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          <Form.Group>
            <Form.Label>Görev Başlığı</Form.Label>
            <Form.Control
              name="title"
              placeholder="Örn:Navbarı Düzenle"
              required
              defaultValue={editItem?.title}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>İsminiz:</Form.Label>
            <Form.Control
              name="author"
              required
              defaultValue={editItem?.author}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Atanacak Kişinin İsmi:</Form.Label>
            <Form.Control
              name="assigned_to"
              required
              defaultValue={editItem?.assigned_to}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Son Teslim Tarihi:</Form.Label>
            <Form.Control
              name="end_date"
              required
              type="date"
              defaultValue={editItem?.end_date}
            />
          </Form.Group>

          <Modal.Footer>
            <Button variant="danger" type="button" onClick={handleClose}>
              İptal
            </Button>
            <Button type="submit">{editItem ? "Kaydet" : "Oluştu"}</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;

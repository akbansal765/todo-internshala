import { v4 as uuidv4 } from 'uuid';
import deleteImg from '../../public/delete.png'
import editImg from '../../public/edit.png'

function ToDoItem(props){

    // const [index, setIndex] = useState(null);

    function handleEdit(e){
      props.handleEditFunction(e.currentTarget.id);

      props.edit(true);
      props.editIndex(e.currentTarget.id)

      // setIndex(e.target.id);
    }

    function handleDelete(e){
       props.handleDelTask(e.currentTarget.id);
    }

    // function handleUpdate(){
      // props.handleUpdateFunction(index);

      // removing update button after updating the content
      // setIndex(null);
    // }
    
    return (
    <div className='todoitem_component'>
        {props.tasks.map((taskStr, i) => {
            return (
            <div key={uuidv4()} className='item'>
              <p className='item_text_element' style={taskStr.length > 35 ? {overflowX : 'scroll'} : {}}>{taskStr}</p>
              <button id={i} onClick={handleDelete}>
                <img src={deleteImg} alt='delete'/>
              </button>
              <button id={i} onClick={handleEdit}>
                <img src={editImg} alt="edit" />
              </button>
              {/* {i == index && <button onClick={handleUpdate}>Update</button>} */}
              <input type="checkbox" name="checkbox" id="checkbox"/>
            </div>)
           })}
    </div>

    )
}

export default ToDoItem;
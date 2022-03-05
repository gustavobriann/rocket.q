import { Modal } from './modal'

const modal = Modal()

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

//Abrir modal
modal.open()

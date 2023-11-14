import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.scss']
})
export class SessaoComponent {
  Comprar(){{
    Swal.fire({
      title: "Tem certeza?",
      showDenyButton: true,
      icon:"question",
      confirmButtonText: "Sim",
      denyButtonText: "Não",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Compra confirmada com sucesso!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Compra cancelada", "", "info");
      }
    });
  }}
}

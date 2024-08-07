import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminCardComponent } from '@ecommerce/admin-ui';
@Component({
  selector: 'lib-home-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatGridListModule,
    MatIcon,
    AdminCardComponent,
  ],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeAdminComponent {
  users = [
    {
      createdAt: '2024-03-04T06:06:30.832Z',
      name: 'Lila Kuhic',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/216.jpg',
      email: 'Jaydon44@gmail.com',
      biography:
        'Dicta quaerat nemo repellendus adipisci. Hic iusto similique sint. Voluptate quam minus aliquam maiores tenetur excepturi. Itaque doloribus unde accusantium corporis possimus. Accusantium voluptatum consequuntur.',
      id: '1',
    },
    {
      createdAt: '2024-03-04T20:46:04.785Z',
      name: 'Al Boehm',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/858.jpg',
      email: 'Stella35@hotmail.com',
      biography:
        'Quia minima sunt deleniti. Dicta optio voluptate repellat similique velit. Vitae odio corrupti mollitia repellat vel eligendi dolor vel quo.',
      id: '2',
    },
    {
      createdAt: '2024-03-04T16:28:28.886Z',
      name: 'Rebecca Gislason',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/441.jpg',
      email: 'Isobel8@gmail.com',
      biography:
        'Quam laudantium eius voluptates. Dolores temporibus delectus. Corporis id consectetur iure hic dolores labore minima. Vel optio incidunt tenetur odit. Similique ipsum facilis ipsam esse asperiores aliquid doloremque eveniet. Facilis non nesciunt nemo qui unde repellendus quam pariatur cupiditate.',
      id: '3',
    },
    {
      createdAt: '2024-03-04T11:32:14.418Z',
      name: 'Ms. Conrad Christiansen',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1130.jpg',
      email: 'Broderick.Kling@yahoo.com',
      biography:
        'Consectetur ut suscipit debitis nemo praesentium soluta repellat veritatis. Nihil excepturi atque ab veniam necessitatibus quae. Assumenda dolorem dicta aut ex tempora cumque voluptatibus.',
      id: '4',
    },
    {
      createdAt: '2024-03-04T17:02:16.498Z',
      name: 'Kerry Bailey',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/824.jpg',
      email: 'Melissa.Ankunding47@yahoo.com',
      biography:
        'Voluptatem cupiditate est error fugiat perferendis assumenda laudantium accusamus perspiciatis. Totam consectetur debitis rem modi odit omnis. Illum minima rem ut in porro ducimus eligendi. Error inventore architecto aspernatur neque commodi voluptatem.',
      id: '5',
    },
    {
      createdAt: '2024-03-04T09:39:03.600Z',
      name: 'Mike Gleichner',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/617.jpg',
      email: 'Bill.Larkin43@hotmail.com',
      biography:
        'Ab eos est alias expedita iusto beatae fuga explicabo. Et consectetur atque atque. Enim vel nam incidunt commodi eaque. Iusto quas odit eligendi veritatis atque perferendis minima. Aut in ab ab facilis perspiciatis magnam ipsum explicabo illum. Natus sint amet ab a reiciendis.',
      id: '6',
    },
  ];
}

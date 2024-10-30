import { Component, ViewChild, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public detailInfo!: string; // Properti untuk detail informasi
  private activatedRoute = inject(ActivatedRoute);
  
  @ViewChild('detailModal') detailModal!: IonModal;

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log("Folder ID:", this.folder); // Log folder ID untuk debug
  }

  // Metode untuk membuka modal
  openModal() {
    // Atur detail informasi yang ingin ditampilkan
    this.detailInfo = "Ini adalah deskripsi detail yang muncul saat kartu diperbesar. Anda bisa menambahkan informasi lebih lanjut di sini.";
    console.log("Opening modal for folder:", this.folder); // Log untuk debug
    console.log("Detail info:", this.detailInfo); // Log detail info untuk debug
    this.detailModal.present();
  }

  // Metode untuk menutup modal
  closeModal() {
    this.detailModal.dismiss();
  }
}

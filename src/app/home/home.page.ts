import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taskList = [];
  taskName = '';

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
  ) { }

  addTask() {
    if (this.taskName.length > 0) {
      const task = this.taskName;
      this.taskList.push(task);
      this.taskName = '';
    }
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

  async updateTask(index) {
    const alert = await this.alertCtrl.create({
      header: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Update',
          handler: data => {
            this.taskList[index] = data.editTask;
          },
        },
      ],
    });

    await alert.present();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  protected lsUser = 'selectedUser';

  constructor() { }

  ngOnInit() {
  }

  /**
   * Usado para guardar um objeto no localStorage.
   * @param key Chave do item a ser guardado.
   * @param json JSON do item a ser guardado.
   */
  protected storageJSON(key: string, json: any) {
    try {
      localStorage.setItem(key, JSON.stringify(json));
    } catch (error) {
      console.log('storageData() - error: ', error);
    }
  }

  /**
   * Usado para deletar um dado do localStorage.
   * @param key Chave do item guardado.
   */
  protected removeStoragedItem(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log('storageData() - error: ', error);
    }
  }

  /**
   * Usado para buscar um dado do tipo JSON no localStorage.
   * @param key Chave do item a ser recuperado.
   */
  protected getStoragedJson(key: string) {
    try {
      const item: string = localStorage.getItem(key);
      const json = JSON.parse(item);
      return json;
    } catch (error) {
      console.log('storageData() - error: ', error);
    }
  }

}

import { Component } from '@angular/core';
import { Paciente, Dependente } from '../interface/interface';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent {
  paciente: Paciente = {
    nome: '',
    idade: 0,
    dependentes: []
  };

  dependente: Dependente = {
    nome: '',
    idade: 0
  };

  pacientes: Paciente [] = [];
  dependentes: Dependente [] = [];

    // Adiciona o paciente
    addPaciente() {
      this.pacientes.push(this.paciente);
      this.paciente = {
        nome: '',
        idade: 0,
        dependentes: []
      };
    }

    // Delete paciente
    deletePaciente(paciente: Paciente) {
      this.pacientes = this.pacientes.filter((p) => p !== paciente);
    }


    // Adiciona o dependente
    addDependentes() {
      const novoDependente: Dependente = { ...this.dependente };
      this.paciente.dependentes.push(novoDependente);
      this.dependente = { nome: '', idade: 0}
    }

    // Deletar o dependente da lista
    deleteDependente(dependente: Dependente) {
      this.paciente.dependentes = this.paciente.dependentes.filter((d) => d !== dependente);
    }    

    // Salvar dados
    save() {
      this.pacientes.push(this.paciente);
      this.paciente = {
        nome: '',
        idade: 0,
        dependentes: []
      };
    }
}

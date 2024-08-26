import { Controller, Get, Query, Render } from '@nestjs/common';
import { DiceService } from './dice.service';

@Controller('dice')
export class DiceController {
  constructor(private readonly diceService: DiceService) {}

  @Get('roll')
  @Render('index')
  rollDice(@Query('sides') sides: number = 50): {
    result: number;
    message: string;
  } {
    const result = this.diceService.rollDice(sides);
    let message = '';

    switch (result) {
      case 1:
        message = 'Um efeito calamitoso ocorre';
        break;
      case 2:
        message =
          'O alvo gasta todos os seus pontos de energia disponíveis, tomando 1d6 de dano de integridade para cada ponto de energia perdido. O valor de integridade perdido é convertido em pontos de vida temporários que duram 1 hora';
        break;
      case 3:
        message = 'A CD do alvo cresce em 6 pontos';
        break;
      case 4:
        message =
          'Um portal é aberto, centrado no alvo da técnica, ele despeja água lamacenta num raio de 6 metros, a área se torna um terreno difícil, reduzindo a movimentação das criaturas dentro dela pela metade';
        break;
      case 5:
        message = 'A técnica alvo é ativada duas vezes';
        break;
      case 6:
        message = 'O alvo mais 3 aliados recebem uma cura de 2d12';
        break;
      case 7:
        message =
          'Inversão de atrito, numa área de raio de 9 metros a movimentação ficará invertida, jogando 1d4 definirá como a área irá agir pelo resto do turno, até voltar para o usuário';
        break;
      case 8:
        message =
          'Um raio de luz ofusca todos numa área de raio de 6 metros, todos que estiverem no alcance devem fazer um teste de sabedoria CD 16 ou ficarão cegas por 1 turno';
        break;
      case 9:
        message = 'O usuário cura todos os seus pontos de vida';
        break;
      case 10:
        message =
          'Sua roupa sofre uma reparação completa, se estava rasgada ela volta para seu estado original';
        break;
      case 11:
        message = 'Gasto de energia da técnica reduzida a 0';
        break;
      case 12:
        message =
          'Uma goiabada aparece próximo da criatura hostil mais próxima';
        break;
      case 13:
        message =
          'Uma cortina de raio de 50 metros é criada envolta do alvo, todos podem se mover livremente para fora da cortina e tudo dentro da cortina é visto em preto e branco';
        break;
      case 14:
        message =
          'Gasta metade dos pontos de vida do alvo e os converte em pontos de energia temporários que duram por 1 dia';
        break;
      case 15:
        message = 'Uma maldição aleatória é invocada';
        break;
      case 16:
        message = 'É conjurado portal do érebo para uma localização aleatória';
        break;
      case 17:
        message = 'Maximiza o dano da próxima técnica que for usada';
        break;
      case 18:
        message =
          'Uma criatura numa área de 9 metros recebe a condição confuso';
        break;
      case 19:
        message = 'O usuário cura 2d12';
        break;
      case 20:
        message = 'O alvo ganha movimentação de voo por 2 turnos';
        break;
      case 21:
        message =
          'Um campo de flores desabrocha num raio de 6 metros centrado no usuário, as flores exalam um odor hipnótico, todos dentro da área que não tiverem sucesso em um teste de fortitude CD 16';
        break;
      case 22:
        message =
          'Uma área de raio de 4,5 metros é criada envolta do alvo, habilidades usadas dentro desse círculo custam metade';
        break;
      case 23:
        message =
          'São criadas barreiras em formato de cubo ao redor do alvo, cada barreira possui 20 de vida e desaparece após 3 turnos';
        break;
      case 24:
        message =
          'Uma área de raio de 4,5 metros é criada envolta do alvo, habilidades usadas dentro desse círculo custam dobro';
        break;
      case 25:
        message =
          'A eficiência da técnica aumenta, aumentando seu efeito em 1 ponto';
        break;
      case 26:
        message = 'É conjurado véu da noite sem custo no alvo';
        break;
      case 27:
        message =
          'Pelos próximos 3 turnos, o alvo recupera 5 pontos de vida por turno';
        break;
      case 28:
        message =
          '6 portais, de raio de 4,5 metros, se abrem em locais aleatórios do chão, deles saem pilares de pedra de 10 metros cada, uma criatura que estiver acima do portal será levantada até onde o pilar for, caso o pilar venha a esmagar uma criatura contra a parede, fazendo-a tomar 2d4 de dano de concussão, ela pode realizar um teste de destreza CD 15 para sair do pilar antes da colisão';
        break;
      case 29:
        message =
          'A roupa do usuário se torna uma armadura pesada, sua CA aumenta em +6, porém seu movimento é reduzido pela metade';
        break;
      case 30:
        message =
          'O alvo é teletransportado para a dimensão do caos por 1 turno, o alvo deve ser bem sucedido em um teste de vontade CD 16 se passe o alvo toma metade de 4d8 de dano de integridade';
        break;
      case 31:
        message = 'O alvo terá desvantagem no próximo ataque';
        break;
      case 32:
        message =
          'A criatura mais próxima ao alvo recebe um efeito aleatório dessa tabela';
        break;
      case 33:
        message = 'Dobra o movimento do usuário pelo próximo turno';
        break;
      case 34:
        message = 'Nada acontece';
        break;
      case 35:
        message = 'O alvo ganha vantagem no próximo ataque';
        break;
      case 36:
        message =
          'Um olho extra aparece na sua cabeça, pela próxima hora, você tem vantagem em testes de percepção';
        break;
      case 37:
        message =
          'Uma maldição amigável é invocada ao lado do alvo, ela concede um aumento de +1 em todas as perícias para todas as criaturas num raio de 9 metros dela';
        break;
      case 38:
        message =
          'Uma voz de narrador narra seus pensamentos e ações pelo próximo minuto, a voz pode ser ouvida claramente numa distância de 30 metros';
        break;
      case 39:
        message = 'Dobra a movimentação do usuário por 2 turnos';
        break;
      case 40:
        message =
          'Uma nuvem de poeira, com raio de 6 metros, aparece centrada no alvo da técnica';
        break;
      case 41:
        message = 'Um Wepping angel é invocado';
        break;
      case 42:
        message = 'O alvo ganha 15 pontos de energia temporários';
        break;
      case 43:
        message =
          'Um alvo inimigo ganha um ataque de oportunidade contra o usuário';
        break;
      case 44:
        message =
          'Uma nuvem de poeira, com raio de 6 metros, aparece centrada no alvo da técnica';
        break;
      case 45:
        message = 'O alvo ganha vantagem no próximo ataque';
        break;
      case 46:
        message =
          'Um olho extra aparece na sua cabeça, pela próxima hora, você tem vantagem em testes de percepção';
        break;
      case 47:
        message =
          'Uma maldição amigável é invocada ao lado do alvo, ela concede um aumento de +1 em todas as perícias para todas as criaturas num raio de 9 metros dela';
        break;
      case 48:
        message =
          'Uma voz de narrador narra seus pensamentos e ações pelo próximo minuto, a voz pode ser ouvida claramente numa distância de 30 metros';
        break;
      case 49:
        message = 'Dobra a movimentação do usuário por 2 turnos';
        break;
      case 50:
        message =
          'A técnica do alvo atinge um nível de poder superior, fazendo com que ela atinge um patamar impossível para além da bênção do caos';
        break;
      default:
        message = 'Roll again!';
    }

    return { result, message };
  }
}

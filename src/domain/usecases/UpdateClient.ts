import { Client } from '../../app/stores/clients'
import IUseCase from '../../core/usecases/IUseCase'
import { Result } from '../../utilities/Result'
import ClientEntity from '../entities/ClientEntity'
import IClientsRepository from '../repositories/IClientsRepository'

export default class UpdateClient implements IUseCase<Client, ClientEntity[]> {
  constructor(private repository: IClientsRepository) {}

  async execute(client: Client): Promise<Result<ClientEntity[]>> {
    const result = await this.repository.updateClient(client as ClientEntity)

    if (result.isFailure) {
      return Result.fail('Cannot update client')
    }
    return Result.ok(result) as unknown as Result<ClientEntity[]>
  }
}

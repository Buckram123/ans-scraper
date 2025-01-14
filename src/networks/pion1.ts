import { ContractRegistry } from '../registry/contractRegistry'
import { PoolRegistry } from '../registry/poolRegistry'
import { Network } from './network'
import { Astroport } from '../exchanges'
import { AssetRegistry } from '../registry/assetRegistry'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Pion1Options {}

const PION_1 = 'pion-1'

export class Pion1 extends Network {
  private options: Pion1Options

  constructor(
    assetRegistry: AssetRegistry,
    contractRegistry: ContractRegistry,
    poolRegistry: PoolRegistry,
    options: Pion1Options = {}
  ) {
    super({
      networkId: PION_1,
      assetRegistry,
      contractRegistry,
      poolRegistry,
      exchanges: [
        new Astroport({
          contractsUrl:
            'https://raw.githubusercontent.com/astroport-fi/astroport-changelog/main/neutron/pion-1/core_testnet.json',
            cacheSuffix: PION_1
        }),
      ],
    })
    this.options = options
  }
}

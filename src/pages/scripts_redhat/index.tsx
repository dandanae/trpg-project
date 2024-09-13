import { useState } from 'react'
import { ContentSection, InputText } from '@/components/common'
import { MacroNavigation, ScenarioNavigation } from '@/components/navigation'
import {
  DetailButton,
  RedHatSummary,
  RedHatInfo,
  RedHatTruth,
  RedHatNpc,
  RedHatEtc,
  OpenOriginButton,
  CopyableImage,
  RedHatScript,
} from '@/components/scripts'

const ScriptRedhatPage = () => {
  const [kpcName, setKpcName] = useState<string>('KPC')
  const [pcName, setPcName] = useState<string>('PC')

  return (
    <ContentSection>
      <MacroNavigation />
      <ScenarioNavigation
        values={[
          { id: 'top', label: '맨 위로', type: 'first' },
          { id: '1', label: '1. KPC 탐정사무소입니다!', type: 'first' },
          { id: '2', label: '2. 아니, 시작부터요?', type: 'first' },
          { id: '3', label: '3. 네, 시작부터요', type: 'first' },
          { id: '4', label: '4. 진짜 시작은 여기부터입니다', type: 'first' },
          { id: '5', label: '5. 1 일차, 오늘의 날씨는 맑음', type: 'first' },
          { id: '5-경시청', label: '📌 경시청', type: 'second' },
          { id: '5-경시청-조사', label: '✨ 조사', type: 'third' },
          { id: '5-경시청-심문', label: '✨ 심문', type: 'third' },
          { id: '5-레드햇의집', label: '📌 레드햇의 집', type: 'second' },
          { id: '5-레드햇의집-심문', label: '✨ 심문', type: 'third' },
          { id: '5-레드햇의집-조사', label: '✨ 조사', type: 'third' },
          { id: '6', label: '6. 돌아온 탐정사무소', type: 'first' },
          { id: '7', label: '7. 2일차, 오늘의 날씨는 흐림', type: 'first' },
          { id: '7-마리아의저택', label: '📌 마리아의 저택', type: 'second' },
          { id: '7-마리아의저택-심문', label: '✨ 심문', type: 'third' },
          { id: '7-마리아의저택-조사', label: '✨ 조사', type: 'third' },
          { id: '8', label: '8. 잡으라는 범인은 안 잡고', type: 'first' },
          { id: '9', label: '9. 대망의 날', type: 'first' },
          { id: '11', label: '11. 사건의 진상은 이렇습니다.', type: 'first' },
          { id: '12', label: '12. 후일담', type: 'first' },
        ]}
      />
      <div id="top" className="flex items-center justify-center gap-3">
        <DetailButton label="개요">
          <RedHatSummary />
        </DetailButton>
        <DetailButton label="소개">
          <RedHatInfo />
        </DetailButton>
        <DetailButton label="진상">
          <RedHatTruth />
        </DetailButton>
        <DetailButton label="NPC">
          <RedHatNpc />
        </DetailButton>
        <DetailButton label="기타">
          <RedHatEtc />
        </DetailButton>
        <OpenOriginButton label="미스터 레드햇" url="https://www.postype.com/@h-3-r-m-3-s/post/4754806" />
      </div>
      <div className="relative flex flex-col gap-5 overflow-y-auto">
        <CopyableImage
          alt="세션카드"
          width={1200}
          height={800}
          imageUrl="https://blog.kakaocdn.net/dn/yvNuS/btsI7HoZtDE/ia2LqTWvUzFdNfSUGVpFSk/img.png"
        />
        <div className="flex items-center justify-center gap-5">
          <InputText id="kpcName" label="KPC 이름" value={kpcName} setValue={setKpcName} />
          <InputText id="pcName" label="PC 이름" value={pcName} setValue={setPcName} />
        </div>
        <RedHatScript kpcName={kpcName} pcName={pcName} />
      </div>
    </ContentSection>
  )
}

export default ScriptRedhatPage
